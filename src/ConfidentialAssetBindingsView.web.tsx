import type { ConfidentialAssetBindingsViewProps } from './ConfidentialAssetBindings.types';

export default function ConfidentialAssetBindingsView(props: ConfidentialAssetBindingsViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
