type NextPage<Params> =
  | React.FC<{
      params: Params;
    }>
  | Promise<
      React.FC<{
        params: Params;
      }>
    >;
