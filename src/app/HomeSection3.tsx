function Block({
  title,
  description,
  backgroundColor,
}: {
  title: string;
  description: string;
  backgroundColor: string;
}) {
  return <div 
  style={{
    backgroundColor: backgroundColor,
  }}
  className="w-[50%] aspect-[720/604]"></div>;
}

export default function HomeSection3() {
  return <div className="w-full flex flex-row flex-wrap">
    <Block title="Block 1" description="Description 1" backgroundColor="#28D2DC" />
    <Block title="Block 2" description="Description 2" backgroundColor="#fff" />
    <Block title="Block 3" description="Description 3" backgroundColor="#fff" />
    <Block title="Block 4" description="Description 4" backgroundColor="#28D2DC" />
  </div>;
}
