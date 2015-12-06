getMeasuredPower
public int getMeasuredPower()
Returns:
Measured power of the beacon (in dBm).

Interface BeaconManager.RangingListener

Enclosing class:
BeaconManager

public static interface BeaconManager.RangingListener
Callback to be invoked when beacons are ranged.
Method Summary

Methods
Modifier and Type	Method and Description
void	onBeaconsDiscovered(Region region, java.util.List<Beacon> beacons)
Tells listener what beacons are currently in range.