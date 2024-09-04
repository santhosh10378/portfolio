import { highlight } from 'sugar-high';
import { MDXRemote } from 'next-mdx-remote/rsc';

import Counter from '@/components/counter';

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code,
  Counter,
};

export default function MDXContent(props) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
