import React, { useState } from 'react';
import { View, Touchable,ScrollView } from 'framework/surface';
import { Text, Title2, Title, Headline } from 'framework/text';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Shimmer } from 'framework/utils';
import { ScreenWrapper } from 'components/ScreenWrapper';


const ProductImage = ({ image, loading }) => {
  const heightWidth = 'h-32 w-32';
  return (
    <Shimmer active={loading} className={`${heightWidth}`}>
      <View className={`${heightWidth} bg-gray-400`} />
    </Shimmer>
  );
};


const VarientsTag = ({ loading, setProduct, item }) => (
  <Shimmer active={loading} className='h-6'>
    <Touchable
      feedback={false}
      className='w-24 bg-white shadow justify-center align-center p-2 rounded-lg m-2'
      onPress={() => {setProduct(item)}}>
      <Headline className='text-primary text-center'>
        {item.name}
      </Headline>
    </Touchable>
  </Shimmer>
);

const BackButton = ({ navigation }) => (
  <Touchable
    feedback
    className='justify-center align-center m-2'
    onPress={() => {
      navigation.goBack();
    }}>
    <Icon size={30} name='arrow-left' color='#000' />
  </Touchable>
);

export const VariantsModal = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const { results,unit } = route.params;
  const [product, setProduct] = useState(  results[0]);
  const { name,  price, image, detail } = product;
  const keys = Object.keys(detail);
  console.log(route.params,'GGG')
  return (
    <View
      className='absolute insetX0 bottom0 borderPrimary borderSolid borderT4 bgWhite'
      style={{ height: (Dimensions.get('window').height / 1.5) }}>
      <View className='flex-row'>
        <BackButton navigation={navigation} />
        <Title2 primary={false} animation='fadeInLeft' className='p-4 text-gray-600 uppercase'>
          Product detail
        </Title2>
      </View>
      <ScreenWrapper title='Product detail' className='flex-1'>
        <ScrollView>
          <View className='flex-row flex-1 align-center justify-center'>
            <ProductImage {...{ loading,navigation }} />
          </View>
          <View className='px-4 pt-4'>
            <Shimmer active={loading} className='h-6'>
              <Title2 primary={false}>
                {name}
              </Title2>
            </Shimmer>
          </View>
          <View className='px-4 pb-4 flex-row justify-between align-center'>
            <Shimmer active={loading} className='w-16'>
              <View className='flex-row'>
                <Title primary={false} className='font-display text-primary '>
                  {unit}
                  {price}
                </Title>
              </View>
            </Shimmer>
          </View>
          <View className='flex-row px-4 flex-wrap m-b4'>
            {results.map((item) => (<VarientsTag {...{ loading, setProduct, item }} />))}
          </View>
          {
          keys.map(key => (
            <View className='px-4 flex-row justify-start align-center' key={detail[key]}>
              <Shimmer active={loading} className='w-1/2'>
                <Headline className='text-gray-800'>
                  {key}
                  {" : "}
                </Headline>
                <Text className='text-gray-800'>
                  {detail[key]}
                </Text>
              </Shimmer>
            </View>
          ))
        }
        </ScrollView>
      </ScreenWrapper>
      <Touchable
        feedback={false}
        className='bg-purple-900 p-4 absolute bottom0 right0 left0'
        onPress={() => setLoading(!loading)}
      >
        <Text className='text-white text-center font-bold'>
          Add To Cart
        </Text>
      </Touchable>
    </View>
  );
};

