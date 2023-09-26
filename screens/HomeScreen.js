import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: 'Testing',
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View>
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-black text-xl">
              Current Location
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
