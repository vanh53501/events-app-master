import { View, Text, FlatList, RefreshControl } from "react-native";
// import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";

const EventList = ({ data, onRefresh }) => {
  const renderItem = ({ item }) => {
    return (
      <EventItem
        id={item.id}
        name={item.name}
        description={item.description}
        qrCode={item.qr_code}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

export default EventList;
