import React from 'react'
import {FlatList, View, Text} from 'react-native'
import repositories from '../data/repositories.js'

function printListElements(propList: any){
    return (
        <FlatList
            data={propList}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item:repo}) => (
                <View key={repo.id} style={{padding: 20, paddingBottom: 5, paddingTop: 5}}>
                    <Text style={{fontWeight:'bold', marginBottom: 1}}>id: {repo.id}</Text>
                    <Text>FullName: {repo.fullName}</Text>
                    <Text>Description: {repo.description}</Text>
                    <Text>Language: {repo.language}</Text>
                    <Text>Forks: {repo.forksCount}</Text>
                    <Text>Stars: {repo.stargazersCount}</Text>
                    <Text>Rating: {repo.ratingAverage}</Text>
                    <Text>Review: {repo.reviewCount}</Text>
                    <Text>Avatar: {repo.ownerAvatarUrl}</Text>
                </View>
            )}
        />
    ); 
}


const RepositoryList = () => {
    return (printListElements(repositories));
};

export default RepositoryList
