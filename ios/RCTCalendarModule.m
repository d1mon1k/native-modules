//
//  RCTCalendarModule.m
//  nativeModules
//
//  Created by Artsiom Ostrovskiy on 05/05/2024.
//

#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
