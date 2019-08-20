import React from 'react';
import MDEditor from '../';
import './App.less';

const mdStr = `# Markdown Editor for React
## 大标题

<p align="center">
  <img src="https://raw.githubusercontent.com/uiwjs/react-markdown-editor/4884f29f2aad59bf7f512184ba3726d76bbd7170/website/logo.svg?sanitize=true">
</p>

<script>
alert('ss')
</script>

\`visble?:boolean\` - Shows a preview that will be converted to html.

### 小标题
#### 小标题
##### 小标题
###### 小标题

<p align="center">
  <style>
  body {
  padding: 100px;
  }
  </style>
  A markdown editor with <b>preview</b>, implemented with React.js and TypeScript.  
</p>

### Props

- \`value: string\`: The Markdown value.
- \`onChange?: (value: string)\`: Event handler for the \`onChange\` event.
- \`commands?: ICommand[]\`: An array of \`ICommand\`, which, each one, contain a \`commands\` property. If no commands are specified, the default will be used. Commands are explained in more details below.
- \`autoFocus?: number = true\`: Can be used to make \`Markdown Editor\` focus itself on initialization.
- \`previewOptions?: ReactMarkdown.ReactMarkdownProps\`: This is reset [react-markdown](https://github.com/rexxars/react-markdown) settings.
- \`height?: number = 200\`: The height of the editor.
- \`visiableDragbar?: boolean = true\`: Show drag and drop tool. Set the height of the editor.
- \`fullscreen?: boolean = false\`: Show markdown preview.
- \`preview?: boolean = true\`: Show markdown preview.
- \`maxHeight?: number = 1200\`: Maximum drag height. The \`visiableDragbar = true\` value is valid.
- \`minHeights?: number = 100\`: Minimum drag height. The \`visiableDragbar = true\` value is valid.

### Development

\`\`\`bash
npm run watch # Listen compile.tsx files.
npm run build # compile.tsx files.

npm run doc
\`\`\`

*斜体文本*    _斜体文本_  
**粗体文本**    __粗体文本__  
***粗斜体文本***    ___粗斜体文本___  

\`\`\`javascript
$(document).ready(function () {
  alert('hello world');
});
\`\`\`


\`\`\`javascript
import * as React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
\`\`\`

\`\`\`python
def g(x):
    yield from range(x, 0, -1)
    yield from range(x)
\`\`\`

    def g(x):
        yield from range(x, 0, -1)
        yield from range(x)

文字链接 [链接名称](http://链接网址)
网址链接 <http://链接网址>

在当前行的结尾加 2 个空格  

- [x] 我的任务
- [x] 我的任务

1. ssss
2. 3333

---

| 表头 | 表头 |
| --- | --- |
| 事实上 | 事实上 |

这个链接用 1 作为网址变量 [Google][1].
这个链接用 yahoo 作为网址变量 [Yahoo!][yahoo].
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [yahoo]: http://www.yahoo.com/
`;


export default function App() {
  const [state, setVisiable] = React.useState({
    visiableDragbar: true,
    preview: true,
  });
  const upDataVisiable = (keyName, e) => {
    setVisiable({ ...state, [keyName]: e.target.checked });
  }
  return (
    <div className="warpper">
      <MDEditor
        value={mdStr}
        height={400}
        visiableDragbar={state.visiableDragbar}
        preview={state.preview}
        onChange={(value) => {
          console.log('【onChange】', value);
        }}
      />
      <div className="doc-tools">
        <label>
          <input type="checkbox" checked={state.visiableDragbar} onChange={upDataVisiable.bind(this, 'visiableDragbar')} />
          是否显示拖拽工具
        </label>
        <label>
          <input type="checkbox" checked={state.preview} onChange={upDataVisiable.bind(this, 'preview')} />
          是否显示预览界面
        </label>
      </div>
    </div>
  )
}