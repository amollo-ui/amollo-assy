declare module "detect-port-alt" {
    type PortCb = (err: Error | null, port: Port) => void;
    export type Port =
        | {
              hostname?: string;
              callback?: () => void;
              port: string | number;
          }
        | PortCb
        | number
        | string;
    type DetectPort = (port: Port, callBack?: PortCb) => Promise<void | Port>;

    interface IOptions {
        retryInterval: number;
        retries: number;
    }

    export const waitPort: (port: Port, options?: IOptions) => boolean;
    const detectPort: DetectPort;

    export default detectPort;
}
