import { useState, useEffect } from 'react';
import _ from 'lodash-es';
import api from '../api';

const defaultHttpResponse = {
  data: {},
  error: null,
  loading: true,
  status: 0,
  _fromCache: false,
};

export const useHttpGet = (url, opts = {}) => {
  const [response, setResponse] = useState(defaultHttpResponse);
  const [refreshCount, setRefreshCount] = useState(0);
  const { defaultData, refresh: refreshSetting = true, ...options } = opts || {};
  const jsonOpts = JSON.stringify(opts);

  const overrideResponse = (override) => setResponse({ ...response, ...override });
  const reload = () => setRefreshCount(refreshCount + 1);
  const refresh = (res) => {
    if (refreshSetting)
      // eslint-disable-next-line no-underscore-dangle
      if (response._fromCache) setResponse(res);
  };

  useEffect(() => {
    setResponse(defaultHttpResponse);

    const load = async () => {
      overrideResponse(defaultHttpResponse);
      if (defaultData)
        overrideResponse({ data: defaultData });

      overrideResponse(await api.get(url, options, refresh));
    };

    load().then();

  }, [url, jsonOpts, refreshCount]);


  return { ...response, reload };
};


export const useHttpList = (url, opts = {}) => {
  const { limit = 10, startingPage = 0, replaceMode = true, autoLoad = false, ...options } = opts;

  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(startingPage);
  const [resultOnPage, setResultOnPage] = useState({});

  const { data, loading: dataLoading, ...response } = useHttpGet(
    url,
    _.merge(options, { params: { limit, offset: limit * pageNumber } }),
  );
  const count = data ? data.count : 0;

  const nextPage = () => {
    if ((limit * pageNumber) < count) setPageNumber(pageNumber + 1);
  };
  const previousPage = () => {
    if (pageNumber > 0) setPageNumber(pageNumber - 1);
  };
  

  useEffect(() => {
    if (!dataLoading) {
      if (data) setResultOnPage({ ...resultOnPage, [pageNumber]: data.results });
      if (autoLoad) nextPage();
      if (loading) setLoading(false);
    }
  }, [dataLoading]);

  const results = replaceMode
    ? resultOnPage[pageNumber]
    : (_.map(resultOnPage, (value) => value)).flat(1);

  return {
    nextPage,
    previousPage,
    results,
    resultOnPage,
    data,
    loading,
    dataLoading,
    ...response
  };
};
