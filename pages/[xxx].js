const Component = ({ time }) => (
  <div>
    <div>Last generated at: { time }</div>
  </div>
);

export const getStaticProps = async () => { 
  return {
    props: { time: new Date().toLocaleString() },
    unstable_revalidate: 3
  };
};

export const getStaticPaths = async () => {
  return {
    paths: ["/xxx"],
    fallback: true
  }
}

export default Component;
