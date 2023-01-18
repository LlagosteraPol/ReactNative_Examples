import React from 'react'
import {View, FlatList, Text} from 'react-native'
import repositories from '../data/repositories'
import {RepositoryItem, viewRepositoryItem} from './RepositoryItem'
import {viewRepositoryStats} from './RepositoryStats'

function printListElements(repoList: Array<RepositoryItem>){
    return (
        <FlatList
            data={repoList}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item:repo}) => viewRepositoryItem(repo)}
        />
    ); 
}


const RepositoryList = () => {
    return (printListElements(repositories));
};

export default RepositoryList
