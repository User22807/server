// Example script to fetch data from the Vercel serverless function
async function fetchData() {
  try {
    const response = await fetch('https://<your-vercel-project-name>.vercel.app/api/index');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();