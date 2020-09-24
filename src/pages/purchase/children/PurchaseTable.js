import React from 'react';
import {StyleSheet, View, Text, FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PurchaseTable = (props) => {

    let {style = {},data,index,loadMore,setDetailIndex} = props;


    let renderOrderList = (item) => {

        return (
            <View style={styles.orderTabListItem}>
                <View style={[styles.orderTabLeftItem,{height:30,borderTopWidth:1}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.pono}</Text>
                </View>
                <View style={[styles.orderTabLeftItem,{height:30}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.partno}</Text>
                </View>
                <View style={[styles.orderTabLeftItem,{height:30}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.typename}</Text>
                </View>
                <View style={[styles.orderTabLeftItem,{height:70}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.description}</Text>
                </View>
                <View style={[styles.orderTabLeftItem,{height:30}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.purdate}</Text>
                </View>
                <View style={[styles.orderTabLeftItem,{height:30}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.plandate}</Text>
                </View>
                <View style={[styles.orderTabLeftItem,{height:30}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.purqty}</Text>
                </View>
                <View style={[styles.orderTabLeftItem,{height:30}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.factqty}</Text>
                </View>
                <View style={[styles.orderTabLeftItem,{height:30}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.purqty - item.item.factqty}</Text>
                </View>
                <View style={[styles.orderTabLeftItem,{height:60}]}>
                    <Text style={{fontSize:12,color:'#333'}}>{item.item.vname}</Text>
                </View>
                <TouchableOpacity onPress={()=>{setDetailIndex(item.index)}} style={[styles.orderTabLeftItem,{height:30}]}>
                    {
                        item.index === index?
                            <Icon name={'chevrons-down'} size={20} color={'#F1761B'} />:
                            <Icon name={'chevrons-up'} size={20} color={'#333'} />
                    }
                </TouchableOpacity>
            </View>
        )
    }

    let tabHeader = ['採購訂單','貨品編號','類別','物料描述','下單日期','預交日期','訂單數','已交貨數','未交貨數','供應商','收貨明细']

    return (
        <View style={[styles.materielTable,style]}>
            <View style={styles.materielTableLeft}>
                {
                    tabHeader.map((item,index) => {
                        return (
                            <View key={index} 
                                style={[styles.orderTabLeftItem,
                                    {height:index === 3?70:(index === 9?60:30)},
                                    {borderTopWidth:index === 0?1:0 }
                                ]
                            }>
                                <Text style={{fontSize:12,color:'#333'}}>{item}</Text>
                            </View>
                        )
                    })
                }
            </View>
            <FlatList
                data={data}
                renderItem={renderOrderList}
                keyExtractor={(item,index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onEndReached={loadMore}
                onEndReachedThreshold={0.2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    materielTable:{
        flexDirection: 'row',
        marginTop:15,
        marginBottom:15,
    },
    materielTableLeft:{
        width:75,
        backgroundColor:'#9ED2EF',
        borderRightWidth:1,
        borderColor:'#666'
    },
    orderTabLeftItem:{
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:1,
        borderColor:'#666'
    },
    orderTabListItem:{
        width:110,
        borderRightWidth:1,
        borderColor:'#666',
    }
})


export default PurchaseTable
