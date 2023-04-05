/**
 * A dynamic job_id router handler
 * 
 * Note: shortcut for template - rafce
 */
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  refreshControl
} from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState, useEffect } from 'react';

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
  const params = useSearchParams(); // retrieve url params
  const router = useRouter();

  const [jobData, setJobData] = useState(null);

  // useEffect(() => {
  //   const { data, isLoading, error, refetch } = useFetch(
  //     'job-details',
  //     { job_id: params.id }
  //   );

  //   console.log('check current data');
  //   console.log(params.id);
  //   console.log(data);

  //   setJobData(data);
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
            />
          ),
          headerTitle: ''
        }}
      >
        JobDetails
      </Stack.Screen>
    </SafeAreaView>
  )
}

export default JobDetails;