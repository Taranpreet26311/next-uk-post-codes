# next-uk-post-codes
A proof of concept "Next.js" app that server-side-renders one page and also is ready to be deployed on AWS ECS via GitHub Actions CI/CD.

update this line in page folder  "return <h1>{data.country} ---- {data.postcode}</h1>;" to say "return <h1>{data.country} ,,.--- {data.postcode}</h1>;"  and see the changes at http://nodelb-160621134.ap-south-1.elb.amazonaws.com/
