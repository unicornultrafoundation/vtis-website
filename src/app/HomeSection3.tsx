
function Block({ title, description, backgroundColor }: { title: string; description: string, backgroundColor: string  }) {
  return (
<div>
  </div>
)
}

export default function HomeSection3() {
  const getSquareBGByIndex = (index: number) => {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 5:
      case 7:
        return "#000000";
      case 2:
      case 4:
      case 6:
        return "#ffffff";
      default:
        return "#28D2DC";
    }
  };

  return (
    <div className="w-full flex flex-wrap">
      
    </div>
  );
}
