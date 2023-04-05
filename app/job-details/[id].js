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
import { useCallback, useState } from 'react';

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';

const JobDetails = () => {
  return (
    <View>
      <Text>JobDetails</Text>
      <Text>ssss</Text>
    </View>
  )
}

export default JobDetails;