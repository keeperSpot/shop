import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { Text, Title2, Title, Headline } from 'framework/text';
import { View, Touchable } from 'framework/surface';
import { Shimmer } from 'framework/utils';


const ProductImage = ({ image, loading }) => {
  const heightWidth = 'h-64 w-full';
  return (
    <Shimmer active={loading} className={`${heightWidth}`}>
      <View className={`${heightWidth} bg-gray-400`} />
    </Shimmer>
  );
};

const VarientsTag = ({ loading, navigation }) => (
  <Shimmer active={loading} className='h-6 absolute right0 bottom0'>
    <Touchable
      feedback={false}
      className='w-24 bg-white
      shadow justify-center align-center p-2 rounded-full m-2 absolute right0 bottom0'
      onPress={() => navigation.navigate('varients')}>
      <Headline className='text-primary text-center'>
        Varients
      </Headline>
    </Touchable>
  </Shimmer>
);
const BackButton = ({ navigation }) => (
  <Touchable
    feedback
    className='bg-white  shadow justify-center align-center rounded-full m-2 absolute left0 top0'
    onPress={() =>{navigation.goBack()}}>
    <Icon size={30} name='arrow-left' color='#000' />
  </Touchable>
);

export const ProductDetailScreen = ({ route, productId, navigation }) => {
  const [product, setProduct] = useState({ ...route.params });
  const id = product.productId || productId;
  const { title, unit, price, image, shortDetails } = product;
  const [loading, setLoading] = useState(false);
  return (
    <ScreenWrapper title='Product Details'>
      <View scroll className='flex-1'>
        <View className='h-64 relative'>
          <ProductImage {...{ image, loading }} />
          <BackButton {...{ navigation }} />
          <VarientsTag {...{ loading, navigation }} />
        </View>
        <View className='px-4 pt-4'>
          <Shimmer active={loading} className='h-6'>
            <Title2 primary={false}>
              {title}
            </Title2>
          </Shimmer>
        </View>
        <View className='px-4 pb-4 flex-row justify-between align-center'>
          <Shimmer active={loading} className='w-16'>
            <View className='flex-row'>
              <Text className='text-gray-700'>
                {shortDetails[1]}
                {' for '}
              </Text>
              <Title primary={false} className='font-display text-primary '>
                {unit}
                {price}
              </Title>
            </View>
          </Shimmer>
          <Shimmer active={loading} className='w-16'>
            <Text className='text-gray-700'>
              {shortDetails[0]}
            </Text>
          </Shimmer>
        </View>
        {
          shortDetails.slice(2, shortDetails.length).map(detail => (
            <View className='px-4 flex-row justify-start align-center' key={detail}>
              <Shimmer active={loading} className='w-1/2'>
                <Text className='text-gray-800'>
                  {detail}
                </Text>
              </Shimmer>
            </View>
          ))
        }
      </View>
      <Touchable
        feedback={false}
        className='bg-purple-900 p-4 absolute bottom0 right0 left0'
        onPress={() => setLoading(!loading)}
        >
        <Text className='text-white text-center font-bold'>
          Add To Cart
        </Text>
      </Touchable>
    </ScreenWrapper>
  );
};
