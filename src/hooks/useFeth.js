import { useEffect, useState } from "react";




export const useFeth = (url) => {

	const [data, setData] = useState([]);



	useEffect(() => {


		const fethData = async () => {

			const res = await fetch(url)
				.then(response => response.json())
				.then(data =>
					setData(data.results))

			/* 			const json = await res.json();
			 */
		};

		fethData()

	}, [url]);

	return { data }

}
