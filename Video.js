import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants'; 

// export default class Video extends React.Component {
//     constructor(props) {
//         super(props);
//         this.video = [
//             {id:"2081238", title: "Forest", url:"https://www.pexels.com/uk-ua/video/2081238/"},
//             {id:"857134", title: "Space", url:"https://www.pexels.com/uk-ua/video/857134/"},
//             {id:"857266", title: "City", url:"https://www.pexels.com/uk-ua/video/857266/"},
//             {id:"2360466", title: "Woman", url:"https://www.pexels.com/uk-ua/video/2360466/"},
//             {id:"857189", title: "Flowers", url:"https://www.pexels.com/uk-ua/video/857189/"},
//             {id:"2583492", title: "Lemons", url:"https://www.pexels.com/uk-ua/video/2583492/"},
//             {id:"1674470", title: "Penguin", url:"https://www.pexels.com/uk-ua/video/1674470/"},
//             {id:"2360537", title: "Water", url:"https://www.pexels.com/uk-ua/video/2360537/"},
//             {id:"1093667", title: "Sea", url:"https://www.pexels.com/uk-ua/video/1093667/"},
//         ]
//     }

//     render () {
//         return this.video.map((el) => {
//             return (

//             )
//         })
//     }
// }



    const DATA = [
                    {id:"2081238", title: "Forest", url:"https://www.pexels.com/uk-ua/video/2081238/"},
                    {id:"857134", title: "Space", url:"https://www.pexels.com/uk-ua/video/857134/"},
                    {id:"857266", title: "City", url:"https://www.pexels.com/uk-ua/video/857266/"},
                    {id:"2360466", title: "Woman", url:"https://www.pexels.com/uk-ua/video/2360466/"},
                    {id:"857189", title: "Flowers", url:"https://www.pexels.com/uk-ua/video/857189/"},
                    {id:"2583492", title: "Lemons", url:"https://www.pexels.com/uk-ua/video/2583492/"},
                    {id:"1674470", title: "Penguin", url:"https://www.pexels.com/uk-ua/video/1674470/"},
                    {id:"2360537", title: "Water", url:"https://www.pexels.com/uk-ua/video/2360537/"},
                    {id:"1093667", title: "Sea", url:"https://www.pexels.com/uk-ua/video/1093667/"},
                ]
  
                function Item({ id, title, selected, onSelect }) {
                    return (
                      <TouchableOpacity
                        onPress={() => onSelect(id)}
                        style={[
                          styles.item,
                          { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
                        ]}
                      >
                        <Text style={styles.title}>{title}</Text>
                      </TouchableOpacity>
                    );
                  }

  export default function Video() {
    const [selected, setSelected] = React.useState(new Map());
  
    const onSelect = React.useCallback(
      id => {
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
  
        setSelected(newSelected);
      },
      [selected],
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          keyExtractor={item => item.id}
          extraData={selected}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
