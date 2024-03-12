import { Inter } from "next/font/google";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
} from "carbon-components-react";
import HeaderComponent from "@/components/HeaderComponent";
import AccordionComponent from "@/components/AccordionComponent";
import ModalComponent from "@/components/ModalComponent";
import TableComponent from "@/components/TableComponent";
import { Dashboard } from "@carbon/icons-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeaderComponent />

      <Breadcrumb style={{ marginTop: "6rem" }}>
        <BreadcrumbItem href="/">Breadcrumb 1</BreadcrumbItem>
        <BreadcrumbItem href="/"> Breadcrumb 2</BreadcrumbItem>
      </Breadcrumb>
      <fieldset className="bx--fieldset" style={{ marginTop: "2rem" }}>
        <legend className="bx--label">Checkbox heading</legend>
        <Checkbox defaultChecked labelText="Checkbox label" id="checked" />
      </fieldset>
      <div style={{ marginTop: "2rem" }}>
        Hello Carbon! Well, not quite yet. This is the starting point for the
        Carbon tutorial.
      </div>
      <Button className="bx--btn--tertiary">Modal</Button>

      {/* <ModalComponent /> */}
      <div style={{ marginTop: "3rem" }}>
        <AccordionComponent />
      </div>

      <TableComponent />
    </>
  );
}
