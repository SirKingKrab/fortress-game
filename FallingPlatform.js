﻿#pragma strict
var platform: GameObject;   //The platform to fall down and then regenerate in initial position
var collided: boolean;      //status or boolean flag of the collision between the player and the collision spot
var erase: boolean;
var initialPos: Vector3;    //The original position of the platform
var initialRot: Quaternion;    //The original rotation of the platform

var poof: GameObject;
var clone : GameObject;

function Start () 
{
	initialPos = platform.transform.position;
	initialRot = platform.transform.rotation;
	collided = false;
  	platform.gameObject.GetComponent.<Rigidbody>().useGravity = false;
    platform.gameObject.GetComponent.<Rigidbody>().isKinematic = true;
}

function Update () 
{
	if (collided == true)
	{
 		platform.gameObject.GetComponent.<Rigidbody>().useGravity = true;
        platform.gameObject.GetComponent.<Rigidbody>().isKinematic = false;	
	}
	if (collided == false)
	{
   		platform.transform.position = initialPos;
  		platform.transform.rotation = initialRot;
   		platform.gameObject.GetComponent.<Rigidbody>().useGravity = false;
    	platform.gameObject.GetComponent.<Rigidbody>().isKinematic = true;		
	}
	if (erase == true)
	{
		Destroy(platform.gameObject);
		Destroy(this.gameObject);
	}
}

function OnTriggerEnter(other: Collider)
{
	/*
	if (other.CompareTag("Player"))
	{
		collided = true;
		yield WaitForSeconds(10);
		collided = false;
		//clone = Instantiate(poof, initialPos, initialRot);
	}
	*/
	if (other.CompareTag("Event"))
	{
		collided = true;
		yield WaitForSeconds(5);
		erase = true;		
	}
}