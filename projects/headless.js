const API_KEY = process.env.API_KEY;

const getPosts = async () => {
  const response = await fetch(
    `https://api-eu-west-2.hygraph.com/v2/${API_KEY}/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
            posts {
                id
                title
                slug
                content {
                  html
                }
                photo {
                  url
                }
              }
            }`,
      }),
    }
  );

  const { data } = await response.json();
  console.log("data:", data);

  return data.posts;
};

export default async function Headless() {
  const posts = await getPosts();

  const postId = "clh61ux41ax550amn9x7p8rl4";
  const post = posts.find((post) => post.id === postId);

  return (
    <main>
      <section>
        <div className="flex flex-col justify-center gap-2 ml-10" key={post.id}>
          <h2 className="font-fungis text-8xl text-blu -mt-10">{post.title}</h2>
          <img src={post.photo.url} alt={post.title} width={720} />
          <div
            className="text-blu prose"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </div>
      </section>
    </main>
  );
}
