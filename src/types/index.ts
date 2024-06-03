export interface projectTypes {
  name: string;
  url: string;
  cover: string;
  stack: string[];
  description: string;
}
export interface projectPropTypes {
  projects: projectTypes[];
}
export interface typeWriterPropsType {
  text: string;
  delay: number;
}

export interface galleryType {
  src: string;
}
export interface galleryPropsType {
  data: galleryType[];
  id: string;
  isVisible?: any;
  ref?: any;
}
