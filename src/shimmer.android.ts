import {enabledProperty, Shimmer as ShimmerBase} from './shimmer.common';

declare var com;

export class Shimmer extends ShimmerBase {

    createNativeView() {
        return new com.facebook.shimmer.ShimmerFrameLayout(this._context);
    }

    [enabledProperty.setNative](value: boolean) {
        if (value) {
            this.nativeView.startShimmer();
        } else {
            this.nativeView.stopShimmer();
        }
    }
}
