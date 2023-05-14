import React from "react";
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { Image, Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigatorParamList } from "../../navigation/common";

import { styles } from "./ProductScreen.style";
import LabelItem from "./LabelItem";

interface ProductScreenProps {}

const ProductScreen: React.FC<ProductScreenProps> = () => {
    const navigation = useNavigation<NavigationProp<NavigatorParamList>>();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/product-brush.png')}  style={styles.image} />

            <View style={styles.productInfoContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.textProductName}>木質牙刷</Text>
                    <Text style={styles.textProductPrice}>$4.50</Text>
                </View>
                <Text style={styles.textProductDescription}>Put your item description here. This toothbrush is made of bamboo and charcoal</Text>
                <View style={styles.divider}/>
                <Text style={styles.textProductOptions}>選擇 size</Text>
                <View style={styles.labelsContainer}>
                    <LabelItem text="Extreme Soft" />
                    <LabelItem text="soft" />
                    <LabelItem text="Medium" />
                    <LabelItem text="Hard" />
                </View>

                <View style={styles.btnsContainer}>
                    <TouchableOpacity onPress={() => {}} style={styles.button} activeOpacity={0.6}>
                        <Text style={styles.textButton}>加入願望清單</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={styles.button} activeOpacity={0.6}>
                        <Text style={styles.textButton}>加入購物車</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => {}} style={{ ...styles.button, backgroundColor: '#8391a1', width: '88%' }} activeOpacity={0.6}>
                    <Text style={styles.textButton}>直接購買</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
};

export default ProductScreen;