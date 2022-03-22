import Navigation from '../components/Navigation';
import {useGetCryptosQuery} from '../redux/services/cryptoApi';
import {API_KEY,API_URL} from '../route';

function IndexPage() {
	const {data, isFetching} = useGetCryptosQuery();

	if (isFetching) {
		return 'Loading...';
	}
	
	console.log(data);
	return (
<>
<Navigation search />
<div className="container-fluid">
<div>
<h1>Index page</h1>
k>{API_KEY}, {API_URL}
</div>
</div>
</>
);
}

export default IndexPage;