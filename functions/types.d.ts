interface D1PreparedStatement {
  bind(...values: string[]): D1PreparedStatement;
  run(): Promise<unknown>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

type PagesFunction<Env = unknown> = (context: {
  request: Request;
  env: Env;
  params: Record<string, string | string[]>;
  next: () => Promise<Response>;
}) => Response | Promise<Response>;

