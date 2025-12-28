import { 
  ClipboardList, 
  PenTool, 
  Users, 
  FileCheck, 
  Send, 
  Code2, 
  SearchCheck, 
  MessageSquareQuote 
} from 'lucide-react';
import { ProductStep } from './types';

export const STEPS: ProductStep[] = [
  {
    id: 1,
    title: "确认需求",
    icon: ClipboardList,
    process: ["收集需求", "确认需求", "需求排期", "归入迭代"],
    deliverable: "更新需求池，明确需求归入的迭代版本",
    // 1. 青色系 (Cyan/Sky)：清新的开始，活跃且正向（避开橙黄）
    // 下方对比：05 粉色
    // 右侧对比：02 紫色
    colorPrompt: "from-cyan-500 to-sky-600" 
  },
  {
    id: 2,
    title: "方案设计",
    icon: PenTool,
    process: ["需求分析", "方案设计", "与产品线负责人确认方案"],
    deliverable: "完成方案初稿并预约内部评审",
    // 2. 紫色系 (Violet/Purple)：代表设计的智慧与深度
    // 下方对比：06 橙色 (互补色，极高对比)
    // 左右对比：01 青色 / 03 红色
    colorPrompt: "from-violet-500 to-purple-600"
  },
  {
    id: 3,
    title: "内部评审 (含UI交互)",
    icon: Users,
    process: ["预约会议", "全员评审", "反馈优化"],
    deliverable: "评审结果反馈：二次评审时间或定稿时间",
    // 3. 红色系 (Rose/Red)：醒目，代表重要的评审节点
    // 下方对比：07 靛蓝
    // 左右对比：02 紫色 / 04 蓝色
    colorPrompt: "from-rose-500 to-red-600"
  },
  {
    id: 4,
    title: "内部定稿",
    icon: FileCheck,
    process: ["UI设计负责人审核", "产品线负责人审核"],
    deliverable: "定稿后的产品方案（含UI交互）",
    // 4. 蓝色系 (Blue/Royal)：冷静、确定、专业
    // 下方对比：08 绿色
    // 左侧对比：03 红色
    colorPrompt: "from-blue-600 to-indigo-600"
  },
  {
    id: 5,
    title: "需求下发",
    icon: Send,
    process: ["预约评审会", "需求宣讲", "评审反馈处理", "产品线负责人审核", "邮件下发需求"],
    deliverable: "需求下发邮件",
    // 5. 粉色系 (Fuchsia/Pink)：鲜明、具有穿透力的触达颜色
    // 上方对比：01 青色
    // 右侧对比：06 橙色
    colorPrompt: "from-fuchsia-500 to-pink-600"
  },
  {
    id: 6,
    title: "开发阶段跟进",
    icon: Code2,
    process: ["面向开发解惑答疑", "提前介入验收UI"],
    deliverable: "服从项目负责人安排，顺利推进项目",
    // 6. 琥珀橙系 (Amber/Orange)：充满活力，与上方的紫色形成最强互补对比
    // 上方对比：02 紫色
    // 左右对比：05 粉色 / 07 靛蓝
    colorPrompt: "from-amber-500 to-orange-600"
  },
  {
    id: 7,
    title: "验收阶段",
    icon: SearchCheck,
    process: ["从需求到交互的全面验收", "UI的全面验收"],
    deliverable: "验收问题登记云效",
    // 7. 靛蓝系 (Indigo/Slate)：深沉、严谨，代表查漏补缺
    // 上方对比：03 红色
    // 左右对比：06 橙色 / 08 绿色
    colorPrompt: "from-indigo-500 to-slate-700"
  },
  {
    id: 8,
    title: "上线后反馈",
    icon: MessageSquareQuote,
    process: ["跟进用户使用情况", "及时复盘项目上线结果"],
    deliverable: "上线两周内完成反馈报告，发送至钉钉群内",
    // 8. 翠绿色系 (Emerald/Green)：代表成功的终点 (Requirements)
    // 上方对比：04 蓝色
    // 左侧对比：07 靛蓝
    colorPrompt: "from-emerald-500 to-green-600"
  }
];