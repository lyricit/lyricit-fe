import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useId, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useOnClickOutside } from 'usehooks-ts';

const ColorSelector = ({
  color,
  label,
  onChange,
}: {
  color?: string;
  label?: string;
  onChange: ((newColor: string) => void) | undefined;
}) => {
  const id = useId();
  const ref = useRef(null);
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => {
    toggle(false);
  }, []);

  useOnClickOutside(ref, close);

  return (
    <>
      <div className="flex items-center">
        <button
          type="button"
          id={id}
          className="me-2 h-8 w-8 cursor-pointer rounded-full border-[3px] border-black/30"
          style={{ backgroundColor: color }}
          onClick={() => {
            toggle(true);
          }}
        />
        <label
          className="cursor-pointer text-center font-semibold text-white uppercase"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute"
            ref={ref}
          >
            <HexColorPicker color={color} onChange={onChange} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ColorSelector;
