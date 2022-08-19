import {
  useGetCurrentUser,
  useGetUserChallenges,
  useGetUserCurriculum,
} from "./../../../../network/queries";
export const useDashboard = () => {
  const { user, isLoading: isLoadingUser } = useGetCurrentUser();
  const { curriculums, isLoading: isLoadingCurriculums } =
    useGetUserCurriculum();

  const { challenges, isLoading: isLoadingChallenges } = useGetUserChallenges();

  const isLoading = isLoadingUser || isLoadingCurriculums || isLoadingChallenges;

  return {
    user,
    isLoading,
    isLoadingUser,
    curriculums,
    isLoadingCurriculums,
    challenges,
    isLoadingChallenges,
  };
};
