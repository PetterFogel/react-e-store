import { Content } from "../../models/content";
import contactImage from "../../assets/contact.jpg";
import storeImage from "../../assets/store.jpg";

export const aboutContent: Content[] = [
  {
    id: "1",
    title: "Find us",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Diam turpis cursus sodalesnisi vitae aliquet vestibulum scelerisque. Fringilla vulputatemorbi ut justo neque id maecenas. At tincidunt vitae donec nuncvel molestie ipsum massa neque. Magnis tortor pulvinar vitaevulputate orci id nunc nisi mattis.",
    imgUrl: storeImage
  },
  {
    id: "2",
    title: "Fabric",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Diam turpis cursus sodalesnisi vitae aliquet vestibulum scelerisque. Fringilla vulputatemorbi ut justo neque id maecenas. At tincidunt vitae donec nuncvel molestie ipsum massa neque. Magnis tortor pulvinar vitaevulputate orci id nunc nisi mattis.",
    imgUrl: contactImage
  }
];
