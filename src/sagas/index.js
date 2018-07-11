import { watchFbGetLoginStatusSuccess } from "./auth";
import { watchFetchTitleList } from "./title";

export default function* rootSaga() {
  yield [watchFbGetLoginStatusSuccess(), watchFetchTitleList()];
}
