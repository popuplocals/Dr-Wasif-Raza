/**
 * Dr. Wasif Raza wordmark, rebuilt from the supplied logo: brush-script name (Kaushan Script) over two lines of
 * Montserrat ExtraBold credentials in orange. Live text, so it is sharp at any size and can switch to white on dark.
 * `compact` shows the name plus a single credentials line; `full` stacks the credentials on two lines like the original.
 */
export const LOGO_GREEN = "#04625C";
export const LOGO_ORANGE = "#E58F00";

type Props = { variant?: "compact" | "full"; light?: boolean; size?: "sm" | "md" | "lg" | "xl"; className?: string; hideCredentials?: boolean };

const NAME_SIZE = { sm: "text-[24px]", md: "text-[30px]", lg: "text-[44px]", xl: "text-[clamp(36px,7.2vw,67px)]" };
const CRED_SIZE = { sm: "text-[9.5px]", md: "text-[11px]", lg: "text-[14px]", xl: "text-[clamp(13px,2.4vw,22px)]" };

export default function Logo({ variant = "compact", light = false, size = "md", className = "", hideCredentials = false }: Props) {
  const name = light ? "#FFFFFF" : LOGO_GREEN;
  return (
    <span className={`inline-flex flex-col ${variant === "full" ? "items-center text-center" : "items-start"} leading-none ${className}`}>
      <span className={`font-script ${NAME_SIZE[size]} leading-[1.05]`} style={{ color: name }}>
        Dr. Wasif Raza
      </span>
      {!hideCredentials &&
        (variant === "full" ? (
          <span className={`mt-1.5 block font-extrabold uppercase tracking-[0.03em] ${CRED_SIZE[size]} leading-[1.35]`} style={{ color: LOGO_ORANGE }}>
            MBBS, MS, MCH
            <br />
            FRCS (UK), FACS (USA)
          </span>
        ) : (
          <span className={`mt-1 block font-extrabold uppercase tracking-[0.04em] ${CRED_SIZE[size]}`} style={{ color: LOGO_ORANGE }}>
            MBBS, MS, MCH · FRCS (UK), FACS (USA)
          </span>
        ))}
    </span>
  );
}
