import LightItem from "./LightItem";

const LightList = () => {
  return (
    <div style={background}>
      <LightItem />
      <LightItem />
      <LightItem />
      <LightItem />
      <LightItem />
      <LightItem />
    </div>
  );
};

const background = {
  position: 'relative',
}

export default LightList;