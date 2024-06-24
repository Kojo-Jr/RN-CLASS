import { StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import MainHeader from "../../../components/Headers/MainHeader";
import MiniHeader from "../../../components/Headers/MiniHeader";
import { FlashList } from "@shopify/flash-list";
import SearchBox from "../../../components/Textinputs/SearchBox";
import { jobsData, popularJobs } from "../../../mockData/jobsData";
import BigCards from "../../../components/Cards/BigCards";
import SmallCards from "../../../components/Cards/SmallCards";
import { styled } from "nativewind";

//TODO: Screen must scrollable
//TODO: Featured must be in flatList horizontal
//TODO: Popular must be in flatList vertical

const MainScreen = () => {
  return (
    <View style={Style.mainScreenContainer}>
      <FlashList
        ListHeaderComponent={() => {
          return (
            <View style={{ flex: 1, height: "100%", gap: wp(7) }}>
              {/**Header Component (row) */}
              <MainHeader name="React Native" email="reactnative@gmail.com" />

              {/**Search Component (row) */}
              <SearchBox />

              {/**Featured Jobs (column) */}
              <View style={{ gap: wp(2) }}>
                <MiniHeader title="Featured Jobs" navigationText="See all" />

                <View>
                  <FlashList
                    data={jobsData}
                    renderItem={({ item }) => {
                      return (
                        <BigCards
                          companyImage={item.companyImage}
                          company={item.company}
                          jobTitle={item.jobTitle}
                          salary={item.salary}
                          location={item.location}
                          backgroundColor={item.backgroundColor}
                        />
                      );
                    }}
                    horizontal={!false}
                    showsHorizontalScrollIndicator={false}
                    estimatedItemSize={200}
                  />
                </View>
              </View>

              {/**Popular Jobs (column) */}
              <View>
                <MiniHeader title="Popular Jobs" navigationText="See all" />
                <View>
                  <FlashList
                    data={popularJobs}
                    renderItem={({ item }) => {
                      return (
                        <SmallCards
                          companyimage={item.companyImage}
                          company={item.company}
                          jobtitle={item.jobTitle}
                          salary={item.salary}
                          location={item.location}
                        />
                      );
                    }}
                    estimatedItemSize={200}
                  />
                </View>
              </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default MainScreen;

const Style = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    padding: wp(3),
    gap: wp(10),
    marginTop: wp(15)
  }
});
