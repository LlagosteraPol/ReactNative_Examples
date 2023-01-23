import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

// Custom hook
const useRepositories = () => {
   const {data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
   const { repositories = null } = data

   /*
   // Without using graphql
   const [repositories, setRepositories] = useState(null)

   const  fetchRepositories = async () => {
       const response = await globalThis.fetch('http://192.168.1.42:5000/api/repositories')
       const json = await response.json()
       setRepositories(json)
   }

   useEffect(() => {
       fetchRepositories()
   }, [])
   */
   const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : []

   return {loading, repositories: repositoriesNodes, refetch}
}

export default useRepositories