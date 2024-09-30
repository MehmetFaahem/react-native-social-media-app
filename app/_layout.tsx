import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button, Card, Icon, Avatar } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ad1 from "../assets/images/ad1.png";
import post_one from "../assets/images/post-one.png";

const Stack = createStackNavigator();

const FeedScreen = () => {
  const renderStars = () =>
    Array.from({ length: 5 }, (_, index) => (
      <Icon key={index} name="star" type="material" color="#FFD700" size={18} />
    ));

  const renderTag = (text, width) => (
    <Text style={[styles.tag, { width }]}>{text}</Text>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Business & First Class Reviews</Text>
        <Icon name="menu" type="material" />
      </View>

      <View style={styles.buttonRow}>
        {["Share Your Experience", "Ask A Question"].map((text, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { width: index === 0 ? "55%" : "45%" }]}
          >
            <Text style={styles.buttonText}>{text}</Text>
            <Icon
              name={index === 0 ? "share" : "question-answer"}
              type="material"
              color="#fff"
              size={20}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search anything..."
          style={styles.searchInput}
        />
        <Icon name="search" type="material" />
      </View>

      <Image source={ad1} style={styles.adBanner} />

      <Card containerStyle={styles.card}>
        <View style={styles.postHeader}>
          <Avatar
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }}
          />
          <View style={styles.postHeaderContent}>
            <View style={styles.postHeaderText}>
              <Text style={styles.postName}>Dianne Russell</Text>
              <Text style={styles.postDate}>1 day ago</Text>
            </View>
            <View style={styles.ratingContainer}>
              {renderStars()}
              <Text style={styles.ratingText}>5.0</Text>
            </View>
          </View>
        </View>
        <View style={styles.tagContainer}>
          {renderTag("LHR - DEL​", 74)}
          {renderTag("Ai​r India", 60)}
          {renderTag("Bu​siness Class", 90)}
          {renderTag("July 2023", 60)}
        </View>
        <Text style={styles.postContent}>
          Stay tuned for a ​smoother, more convenient experience right at your
          fingertips , a ​smoother, more convenient a ​smoother, more convenient
          other, more convenient experience right at your
        </Text>
        <Text style={styles.seeMore}>See More</Text>
        <Image source={post_one} style={styles.postImage} />
        <Text style={styles.postStats}>30 Likes - 20 Comments</Text>
        <View style={styles.postFooter}>
          <View style={styles.likeComment}>
            {["Like", "Share"].map((action, index) => (
              <TouchableOpacity key={index} style={styles.iconText}>
                <Icon
                  name={index === 0 ? "thumb-up-outline" : "share"}
                  type={index === 0 ? "material-community" : "material"}
                />
                <Text>{action}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.commentsSection}>
          <View style={styles.commentHeader}>
            <View style={styles.commentUser}>
              <Avatar
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/2.jpg",
                }}
              />
              <View>
                <Text style={styles.commentName}>John Doe</Text>
                <Text style={styles.commentTime}>3 min ago</Text>
              </View>
            </View>
            <Text style={styles.upvotes}>5 Upvotes</Text>
          </View>
          <Text style={styles.commentContent}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis
          </Text>
          <View style={styles.commentActions}>
            {["Upvote", "Reply"].map((action, index) => (
              <TouchableOpacity key={index} style={styles.commentAction}>
                <Icon
                  name={
                    index === 0 ? "keyboard-double-arrow-up" : "question-answer"
                  }
                  type="material"
                  style={index === 0 ? styles.upvoteIcon : null}
                  color={index === 0 ? "#fff" : "rgba(20, 27, 52, 1)"}
                />
                <Text style={styles.actionText}>{action}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.seeMoreComments}>See More Comments</Text>
        </View>
      </Card>

      <View style={styles.footer}>
        <Text>© 2024 Business & First Class Reviews</Text>
      </View>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Feed"
          component={FeedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    paddingTop: 35,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    gap: 10,
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#232323",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    paddingVertical: 10,
  },
  buttonIcon: {
    marginLeft: 5,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    padding: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
  },
  adBanner: {
    width: "95%",
    height: 150,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  card: {
    borderRadius: 10,
    padding: 15,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  postHeaderContent: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 10,
  },
  postHeaderText: {
    justifyContent: "center",
  },
  postName: {
    fontWeight: "bold",
  },
  postDate: {
    color: "gray",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  },
  ratingText: {
    color: "black",
    fontSize: 19,
    marginLeft: 5,
  },
  tagContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    gap: 5,
  },
  tag: {
    fontSize: 12,
    fontWeight: "600",
    backgroundColor: "#dbdbdb",
    padding: 5,
    borderRadius: 5,
    height: 29,
    textAlign: "center",
  },
  postContent: {
    marginBottom: 10,
    fontSize: 14,
  },
  seeMore: {
    fontSize: 14,
    fontWeight: "700",
    color: "#808080",
  },
  postImage: {
    width: "100%",
    height: 354,
    marginVertical: 20,
  },
  postStats: {
    fontSize: 14,
    fontWeight: "400",
    color: "#808080",
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  likeComment: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    gap: 5,
  },
  commentsSection: {
    marginTop: 20,
    backgroundColor: "rgba(242, 244, 248, 1)",
    padding: 10,
    borderRadius: 10,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  commentUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  commentName: {
    fontSize: 14,
    fontWeight: "600",
  },
  commentTime: {
    fontSize: 12,
    fontWeight: "400",
    color: "#808080",
  },
  upvotes: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000000",
  },
  commentContent: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
    marginTop: 10,
  },
  commentActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 10,
  },
  commentAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  upvoteIcon: {
    backgroundColor: "rgba(20, 27, 52, 1)",
    padding: 1,
    borderRadius: 1000,
  },
  actionText: {
    color: "rgba(20, 27, 52, 1)",
    fontSize: 16,
  },
  seeMoreComments: {
    fontSize: 14,
    fontWeight: "700",
    color: "#808080",
    marginTop: 15,
  },
  footer: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
