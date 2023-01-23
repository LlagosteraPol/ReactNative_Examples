import React, { useEffect, useState } from 'react'
import {FlatList, Text} from 'react-native'
import {RepositoryItem, viewRepositoryItem} from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';


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
    const{ repositories } = useRepositories()

    return (printListElements(repositories));
};

export default RepositoryList
