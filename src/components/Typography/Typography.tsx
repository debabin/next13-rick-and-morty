import classnames from 'classnames';

type Tag = 'div' | 'span' | 'h1' | 'h2' | 'p' | 'label';
type Variant =
  | 'banner'
  | 'title-1'
  | 'title-2'
  | 'body-1'
  | 'body-2'
  | 'sub-title-1'
  | 'sub-title-2';

interface TypographyProps {
  tag?: Tag;
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  tag = 'div',
  children,
  variant,
  className
}) => {
  const Component = tag;

  return <Component className={classnames(variant, className)}>{children}</Component>;
};
