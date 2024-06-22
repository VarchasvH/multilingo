import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <Button variant={"default"}>Default</Button>

      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>

      <Button variant={"secondary"}>Secondary </Button>
      <Button variant={"secondaryOutline"}>Secondary Outline </Button>

      <Button variant={"danger"}>Danger</Button>
      <Button variant={"dangerOutline"}>Danger Outline</Button>

      <Button variant={"super"}>Super</Button>
      <Button variant={"superOutline"}>Super Outline</Button>

      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"sidebar"}>Side Bar</Button>
      <Button variant={"sidebarOutline"}>Side Bar</Button>
    </div>
  );
};

export default HomePage;
