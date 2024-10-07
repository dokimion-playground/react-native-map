import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@/navigations/AuthStackNavigator';
import CustomButton from '@/components/CustomButton';
import {authNavigations} from '@/constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

export default function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/cat.webp')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인화면으로 이동"
          size="medium"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
});
