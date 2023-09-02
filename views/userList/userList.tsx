import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useUserList from "./hooks/useUserList";
import Card from "../../components/Card";
import { UserInterface } from "../../redux/context/userSlice";

export default function UserList({ navigation: { navigate } }: any) {
  const { users, loading, loadMoreData } = useUserList();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadMoreData(true);
    setIsRefreshing(false);
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={users}
        keyExtractor={(item: UserInterface) => item.id.toString()}
        renderItem={({ item }: { item: UserInterface }) => (
          <Card
            key={item.id}
            onPress={() => navigate("Detail", { id: item.id })}
            {...item}
          />
        )}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadMoreData()}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#e5e7eb",
  },
});
