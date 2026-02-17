"use strict";(self.webpackChunkpantsbuild_org=self.webpackChunkpantsbuild_org||[]).push([["884578"],{394794(e,r,s){s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var c=s(102159),i=s(886070),t=s(848193),l=s(554707),n=s(375002);let d={title:"cc",description:"Options for a system-discovered `cc` toolchain.\n"},o,a={},h=[{value:"Basic options",id:"basic-options",level:2},{value:"<code>c_compiler_flags</code>",id:"c_compiler_flags",level:3},{value:"<code>c_definitions</code>",id:"c_definitions",level:3},{value:"<code>c_executable</code>",id:"c_executable",level:3},{value:"<code>cxx_compiler_flags</code>",id:"cxx_compiler_flags",level:3},{value:"<code>cxx_definitions</code>",id:"cxx_definitions",level:3},{value:"<code>cxx_executable</code>",id:"cxx_executable",level:3},{value:"<code>include_directories</code>",id:"include_directories",level:3},{value:"<code>search_paths</code>",id:"search_paths",level:3},{value:"Advanced options",id:"advanced-options",level:2},{value:"Deprecated options",id:"deprecated-options",level:2},{value:"Related subsystems",id:"related-subsystems",level:2}];function p(e){let r={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.hr,{}),"\n",(0,i.jsxs)(r.p,{children:["Options for a system-discovered ",(0,i.jsx)(r.code,{children:"cc"})," toolchain."]}),"\n",(0,i.jsxs)(r.p,{children:["Backend: ",(0,i.jsx)("span",{className:"color--primary",children:(0,i.jsx)(r.code,{children:"pants.backend.experimental.cc"})})]}),"\n",(0,i.jsxs)(r.p,{children:["Config section: ",(0,i.jsx)("span",{className:"color--primary",children:(0,i.jsx)(r.code,{children:"[cc]"})})]}),"\n",(0,i.jsxs)("span",{className:n.A.options,children:[(0,i.jsx)(r.h2,{id:"basic-options",children:"Basic options"}),(0,i.jsx)(r.h3,{id:"c_compiler_flags",children:(0,i.jsx)(r.code,{children:"c_compiler_flags"})}),(0,i.jsx)(l.A,{cli_repr:"--cc-c-compiler-flags=\"['<str>', '<str>', ...]\"",env_repr:"PANTS_CC_C_COMPILER_FLAGS",toml_repr:`[cc]
c_compiler_flags = [
  '<str>',
  '<str>',
  ...,
]`,default_repr:`[
  "-std=c11"
]`,children:(0,i.jsx)(r.p,{children:"Flags passed to the C compiler. These flags are merged with the target-level defines, with the target-level flags taking precedence."})}),(0,i.jsx)(r.h3,{id:"c_definitions",children:(0,i.jsx)(r.code,{children:"c_definitions"})}),(0,i.jsx)(l.A,{cli_repr:"--cc-c-definitions=\"['<str>', '<str>', ...]\"",env_repr:"PANTS_CC_C_DEFINITIONS",toml_repr:`[cc]
c_definitions = [
  '<str>',
  '<str>',
  ...,
]`,default_repr:"[]",children:(0,i.jsx)(r.p,{children:"A list of strings to define in the C preprocessor. Will be prefixed by -D at the command line. These defines are merged with the target-level defines, with the target-level definitions taking precedence."})}),(0,i.jsx)(r.h3,{id:"c_executable",children:(0,i.jsx)(r.code,{children:"c_executable"})}),(0,i.jsx)(l.A,{cli_repr:"--cc-c-executable=\"['<str>', '<str>', ...]\"",env_repr:"PANTS_CC_C_EXECUTABLE",toml_repr:`[cc]
c_executable = [
  '<str>',
  '<str>',
  ...,
]`,default_repr:`[
  "clang",
  "gcc"
]`,children:(0,i.jsxs)(r.p,{children:["A list of binary names for the C compiler (in the ",(0,i.jsx)(r.code,{children:"search_paths"}),"). The list is searched in order until a compiler is found."]})}),(0,i.jsx)(r.h3,{id:"cxx_compiler_flags",children:(0,i.jsx)(r.code,{children:"cxx_compiler_flags"})}),(0,i.jsx)(l.A,{cli_repr:"--cc-cxx-compiler-flags=\"['<str>', '<str>', ...]\"",env_repr:"PANTS_CC_CXX_COMPILER_FLAGS",toml_repr:`[cc]
cxx_compiler_flags = [
  '<str>',
  '<str>',
  ...,
]`,default_repr:`[
  "-std=c++11"
]`,children:(0,i.jsx)(r.p,{children:"Flags passed to the C++ compiler. These flags are merged with the target-level defines, with the target-level flags taking precedence."})}),(0,i.jsx)(r.h3,{id:"cxx_definitions",children:(0,i.jsx)(r.code,{children:"cxx_definitions"})}),(0,i.jsx)(l.A,{cli_repr:"--cc-cxx-definitions=\"['<str>', '<str>', ...]\"",env_repr:"PANTS_CC_CXX_DEFINITIONS",toml_repr:`[cc]
cxx_definitions = [
  '<str>',
  '<str>',
  ...,
]`,default_repr:"[]",children:(0,i.jsx)(r.p,{children:"A list of strings to define in the C++ preprocessor. Will be prefixed by -D at the command line. These defines are merged with the target-level defines, with the target-level definitions taking precedence."})}),(0,i.jsx)(r.h3,{id:"cxx_executable",children:(0,i.jsx)(r.code,{children:"cxx_executable"})}),(0,i.jsx)(l.A,{cli_repr:"--cc-cxx-executable=\"['<str>', '<str>', ...]\"",env_repr:"PANTS_CC_CXX_EXECUTABLE",toml_repr:`[cc]
cxx_executable = [
  '<str>',
  '<str>',
  ...,
]`,default_repr:`[
  "clang++",
  "g++"
]`,children:(0,i.jsxs)(r.p,{children:["A list of binary names for the C compiler (in the ",(0,i.jsx)(r.code,{children:"search_paths"}),"). The list is searched in order until a compiler is found."]})}),(0,i.jsx)(r.h3,{id:"include_directories",children:(0,i.jsx)(r.code,{children:"include_directories"})}),(0,i.jsx)(l.A,{cli_repr:"--cc-include-directories=\"['<str>', '<str>', ...]\"",env_repr:"PANTS_CC_INCLUDE_DIRECTORIES",toml_repr:`[cc]
include_directories = [
  '<str>',
  '<str>',
  ...,
]`,default_repr:"[]",children:(0,i.jsx)(r.p,{children:"A list of include directories passed to the compiler. Will be prefixed by -I at the command line. These flags are merged with the target-level includes, with the target-level includes taking precedence."})}),(0,i.jsx)(r.h3,{id:"search_paths",children:(0,i.jsx)(r.code,{children:"search_paths"})}),(0,i.jsxs)(l.A,{cli_repr:"--cc-search-paths=\"['<str>', '<str>', ...]\"",env_repr:"PANTS_CC_SEARCH_PATHS",toml_repr:`[cc]
search_paths = [
  '<str>',
  '<str>',
  ...,
]`,default_repr:`[
  "<PATH>"
]`,children:[(0,i.jsx)(r.p,{children:"A list of paths to search for CC toolchain binaries."}),(0,i.jsxs)(r.p,{children:["Specify absolute paths to directories, e.g. ",(0,i.jsx)(r.code,{children:"/usr/bin"}),". Earlier entries will be searched first."]}),(0,i.jsx)(r.p,{children:"The following special strings are supported:"}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"<PATH>"}),", the contents of the PATH environment variable"]}),"\n"]})]}),(0,i.jsx)(r.h2,{id:"advanced-options",children:"Advanced options"}),(0,i.jsx)(r.p,{children:"None"}),(0,i.jsx)(r.h2,{id:"deprecated-options",children:"Deprecated options"}),(0,i.jsx)(r.p,{children:"None"}),(0,i.jsx)(r.h2,{id:"related-subsystems",children:"Related subsystems"}),(0,i.jsx)(r.p,{children:"None"})]})]})}function x(e={}){let{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},375002(e,r,s){s.d(r,{A:()=>c});let c={options:"options_nrbo"}},554707(e,r,s){s.d(r,{A:()=>l});var c=s(886070),i=s(384122),t=s(580830);function l({children:e,cli_repr:r,env_repr:s,toml_repr:l,one_of:n,default_repr:d,target_field_name:o,removal_version:a,removal_hint:h}){return(0,c.jsxs)("div",{className:"margin-bottom--lg",children:[(0,c.jsx)("code",{style:{color:"var(--pants-reference-option-repr)"},children:r}),(0,c.jsx)("br",{}),(0,c.jsx)("code",{style:{color:"var(--pants-reference-option-repr)"},children:s}),(0,c.jsx)("br",{}),(0,c.jsx)(i.A,{language:"toml",title:"pants.toml",children:l}),(0,c.jsxs)("div",{style:{paddingLeft:"2em"},children:[(0,c.jsxs)("span",{children:[n&&(0,c.jsxs)("span",{children:["one of:"," ",(0,c.jsx)("code",{style:{color:"var(--ifm-color-success)"},children:n}),(0,c.jsx)("br",{})]}),"default:"," ",(0,c.jsx)("span",{style:{color:"var(--ifm-color-success)"},children:(d||"").includes("\n")?(0,c.jsx)("pre",{className:"padding--sm",children:d}):(0,c.jsx)("code",{children:d})})]}),(0,c.jsx)("br",{}),a&&(0,c.jsxs)("span",{style:{color:"var(--ifm-color-danger-darkest)"},children:["Deprecated, will be removed in version: ",a,".",(0,c.jsx)("br",{}),h,(0,c.jsx)("br",{})]}),e,o&&(0,c.jsxs)("span",{children:["Can be overriden by field",(0,c.jsx)("code",{children:o})," on"," ",(0,c.jsx)(t.A,{to:"../targets/local_environment",children:(0,c.jsx)("code",{children:"local_environment"})}),","," ",(0,c.jsx)(t.A,{to:"../targets/docker_environment",children:(0,c.jsx)("code",{children:"docker_environment"})}),", or"," ",(0,c.jsx)(t.A,{to:"../targets/remote_environment",children:(0,c.jsx)("code",{children:"remote_environment"})}),"targets."]})]})]})}},102159(e){e.exports=JSON.parse('{"id":"reference/subsystems/cc","title":"cc","description":"Options for a system-discovered `cc` toolchain.\\n","source":"@site/versioned_docs/version-2.25/reference/subsystems/cc.mdx","sourceDirName":"reference/subsystems","slug":"/reference/subsystems/cc","permalink":"/2.25/reference/subsystems/cc","draft":false,"unlisted":false,"tags":[],"version":"2.25","frontMatter":{"title":"cc","description":"Options for a system-discovered `cc` toolchain.\\n"},"sidebar":"referenceSidebar","previous":{"title":"cc-infer","permalink":"/2.25/reference/subsystems/cc-infer"},"next":{"title":"changed","permalink":"/2.25/reference/subsystems/changed"}}')}}]);