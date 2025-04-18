import * as React from "react"
import { cn } from "../../lib/utils"
interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode
}

function Input({ className, type, icon, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          {icon}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md bg-transparent px-3 py-1 border-[rgb(0,48,73)]/60 border-[0.5px] text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          icon && "pl-10",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
