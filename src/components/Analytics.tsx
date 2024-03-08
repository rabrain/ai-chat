'use client';

import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";

export type Props = {
  name: string
  attrs?: Record<string, string | number | boolean>
}

export default function Analytics(props: Props) {
  const { trackEvent } = useAptabase();
  useEffect(() => {
    console.debug('tracking event:', props.name);
    trackEvent(props.name, props.attrs);
  });

  return null; // Since this component does not render anything, return null
}