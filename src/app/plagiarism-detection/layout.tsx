import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plagiarism Detection | Check Your Content for Originality',
  description: 'Check your text for plagiarism with our advanced detection tool. Scan your content against billions of web pages and get detailed reports on matching content.',
};

export default function PlagiarismDetectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 