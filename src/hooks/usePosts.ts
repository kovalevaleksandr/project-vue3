import axios from "axios";
import { onMounted, ref } from "vue";

export function usePosts() {
  const posts = ref([]);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      posts.value = response.data;
    } catch (e) {
      console.log(e);
    }
  };
  onMounted(fetching);
  return {
    posts,
    isPostLoading,
  };
}
