/**
 * Copyright (c) 2012, Twist and Shout, Inc. http://www.twist.com/
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @author yvonne@twist.com (Yvonne Yip)
 */

package com.badrit.Calendar;

import java.util.TimeZone;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.CalendarContract;
import android.util.Log;

import com.badrit.Calendar.AbstractCalendarAccessor;
import com.badrit.Calendar.CalendarProviderAccessor;
import ccom.badrit.Calendar.LegacyCalendarAccessor;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;



public class CalendarPlugin extends CordovaPlugin {
	public static final String ACTION_ADD_TO_CALENDAR = "addToCalendar";
	public static final String ACTION_FIND_FROM_CALENDAR = "findFromCalendar";
	public static final String ACTION_DELETE_FROM_CALENDAR = "deleteFromCalendar";
	public static final Integer RESULT_CODE_CREATE = 0;
	public static final Integer RESULT_CODE_FIND = 1;
	public static final Integer RESULT_CODE_DELETE = 2;
	private CallbackContext callback;

	private static final String LOG_TAG = AbstractCalendarAccessor.LOG_TAG;

	private AbstractCalendarAccessor calendarAccessor;

	private AbstractCalendarAccessor getCalendarAccessor() {
		if (this.calendarAccessor == null) {
			if (Build.VERSION.SDK_INT > Build.VERSION_CODES.GINGERBREAD) {
				Log.d(LOG_TAG, "Initializing calendar plugin");
				this.calendarAccessor = new CalendarProviderAccessor(
					this.cordova);
			} else {
				Log.d(LOG_TAG, "Initializing legacy calendar plugin");
				this.calendarAccessor = new LegacyCalendarAccessor(this.cordova);
			}
		}
		return this.calendarAccessor;
	}

  /**
   * @param action The action to execute.
   * @param args JSONArray of arguments for the plugin.
   * @return A PluginResult object with a status and message.
   */
  @Override
  public boolean execute(String action, JSONArray args,
  	CallbackContext callbackContext) {
  	callback = callbackContext;
  	if (ACTION_ADD_TO_CALENDAR.equals(action)) { 
  		return createEvent(args);
  	}else if (ACTION_FIND_FROM_CALENDAR.equals(action)) { 
  		return findEvents(args);
  	}
  	else if (ACTION_DELETE_FROM_CALENDAR.equals(action)) { 
  		return deleteEvent(args);
  	}
  	return false;
  }

  public boolean deleteEvent(JSONArray args) {
  	if (args.length() == 0) {
  		System.err.println("Exception: No Arguments passed");
  	} else {
  		try {
  			JSONObject jsonFilter = args.getJSONObject(0);
  			boolean deleteResult = getCalendarAccessor().deleteEvent(
  				null, jsonFilter.optString("title"));
  			PluginResult res = new PluginResult(PluginResult.Status.OK,
  				deleteResult);
  			res.setKeepCallback(true);
  			callback.sendPluginResult(res);
  			return true;
  		} catch (JSONException e) {
  			System.err.println("Exception: " + e.getMessage());
  		}
  	}
  	return false;
  }

  public boolean findEvents(JSONArray args) {
  	if (args.length() == 0) {
  		System.err.println("Exception: No Arguments passed");
  	}
  	try {
  		JSONObject jsonFilter = args.getJSONObject(0);
  		JSONArray jsonEvents = getCalendarAccessor().findEvents(
  			jsonFilter.optLong("startTimeMillis"),
  			jsonFilter.optLong("endTimeMillis"));

  		PluginResult res = new PluginResult(PluginResult.Status.OK,
  			jsonEvents);
  		res.setKeepCallback(true);
  		callback.sendPluginResult(res);
  		return true;

  	} catch (JSONException e) {
  		System.err.println("Exception: " + e.getMessage());
  	}
  	return false;
  }

  public boolean createEvent(JSONArray args) {
  	try {
  		JSONObject arg_object = args.getJSONObject(0);
      boolean status = getCalendarAccessor().createEvent(null, arg_object.getString("title"),
        arg_object.getLong("startTimeMillis"), arg_object.getLong("endTimeMillis"),
        arg_object.getString("description"), arg_object.getString("eventLocation"));
      
      callback.success(status + "");
      return true;
    } catch (Exception e) {
      System.err.println("Exception: " + e.getMessage());
    }
    return false;
  }

  public void onActivityResult(int requestCode, int resultCode, Intent data) {
  	if (requestCode == RESULT_CODE_CREATE
  		|| requestCode == RESULT_CODE_FIND
  		|| requestCode == RESULT_CODE_DELETE) {
  		callback.success(resultCode + "");
  } else {
  	callback.error("Activity result code " + resultCode);
  }
}
}
