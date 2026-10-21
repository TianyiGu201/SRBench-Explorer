import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import markdownContent from '../assets/StudyDesign.md?raw';

const workflowStages = [
  { title: 'High-Res SRT', items: ['Xenium', 'CosMx SMI', 'Visium HD'] },
  { title: 'LR Simulation', items: ['Spot Layout', 'Size & Distance', 'Downsampling'] },
  { title: 'SR Prediction', items: ['XFuse', 'TESLA', 'iSTAR', 'scstGCN', 'SuperST_t', 'SuperST_t_g'] },
  { title: 'Evaluation', items: ['Accuracy', 'Scalability', 'Usability'] },
];

const StudyWorkflow: React.FC = () => (
  <section aria-label="Benchmarking workflow" className="not-prose my-8">
    <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {workflowStages.map((stage, index) => (
        <li key={stage.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
              Step {index + 1}
            </span>
            {index < workflowStages.length - 1 && (
              <span aria-hidden="true" className="hidden text-xl text-slate-400 xl:block">→</span>
            )}
          </div>
          <h3 className="mt-4 text-lg font-bold text-slate-900">{stage.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-2 p-0">
            {stage.items.map((item) => (
              <li key={item} className="list-none rounded-md bg-slate-100 px-2.5 py-1.5 text-sm text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </section>
);

const StudyDesign: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 md:p-12 pb-24">
      <div className="markdown-body prose prose-lg max-w-none">
        {markdownContent.split('<!-- study-workflow -->').map((section, index) => (
          <React.Fragment key={index}>
            {index > 0 && <StudyWorkflow />}
            <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // 自定义链接组件，使用 React Router Link
            a: ({ node, href, children, ...props }) => {
              // 如果是内部链接（以 / 开头），使用 React Router Link
              if (href?.startsWith('/')) {
                return (
                  <Link to={href} className="text-blue-600 font-semibold hover:underline">
                    {children}
                  </Link>
                );
              }
              // 外部链接使用普通 a 标签
              return (
                <a href={href} {...props} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              );
            },
            // 自定义表格样式
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto border border-gray-200 rounded-lg my-6">
                <table className="min-w-full text-sm bg-white" {...props} />
              </div>
            ),
            thead: ({ node, ...props }) => (
              <thead className="bg-gray-50 border-b border-gray-200" {...props} />
            ),
            th: ({ node, ...props }) => (
              <th className="px-6 py-3 text-left font-semibold text-gray-700" {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="px-6 py-3 text-gray-600" {...props} />
            ),
            tbody: ({ node, ...props }) => (
              <tbody className="divide-y divide-gray-100" {...props} />
            ),
            // 自定义代码块样式
            code: ({ node, ...props }) => (
              <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm" {...props} />
            ),
            pre: ({ node, ...props }) => (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-x-auto my-4">
                <pre className="text-sm text-gray-700 font-mono leading-relaxed" {...props} />
              </div>
            ),
            // 自定义标题样式
            h1: ({ node, ...props }) => (
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4 pb-4 border-b border-gray-200" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-12" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 className="text-lg font-bold text-gray-800 mb-3 mt-6" {...props} />
            ),
            // 自定义段落样式
            p: ({ node, ...props }) => (
              <p className="text-gray-600 mb-4 leading-relaxed" {...props} />
            ),
            // 自定义水平线样式
            hr: ({ node, ...props }) => (
              <hr className="my-12 border-gray-200" {...props} />
            ),
            // 自定义列表样式
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside text-gray-600 mb-4 space-y-2" {...props} />
            ),
          }}
            >
              {section}
            </ReactMarkdown>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StudyDesign;
